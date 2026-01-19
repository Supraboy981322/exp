const std = @import("std");

var stderr = @constCast(&std.fs.File.stderr().writer(
    blk: {
        const stdout_buf:[1024]u8 = undefined;
        break :blk @constCast(&stdout_buf);
    }
).interface);

pub fn main() !void {
    const alloc = std.heap.page_allocator;
    const args = try std.process.argsAlloc(alloc);
    const n = std.fmt.parseInt(u8, blk:{
        if (args.len < 2 or args.len > 2) {
            try stderr.print("{s} args\n", .{
                if (args.len > 2) "too many" else "not enough"
            });
            break :blk "1";
        } else break :blk args[1];
    }, 10) catch |e| blk: {
        switch (e) {
            error.InvalidCharacter => try stderr.print("not a number\n", .{}),
            error.Overflow => try stderr.print("number too large (at most 255)\n", .{}),
        }
        break :blk 1;
    };
    std.process.exit(n);
}
