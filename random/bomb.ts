//untested
(async()=>{var a:any;a=async(b:any)=>{(async()=>{return a(a)})();(async()=>{return b(b)})();return b(a)};a(a);})();
