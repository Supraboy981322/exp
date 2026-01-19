#include <stdio.h>

int main(void) {
  printf("foo\n");
  return 256;

  //[~](?): echo "$?"
  //  0
  //[~](?): (exit 255)
  //[~](!): echo "$?"
  //  255
}
