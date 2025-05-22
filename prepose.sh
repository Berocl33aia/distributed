awk '/<[\/]*script/ { print NR }'|
 while read li; do read ul; if [ ${#ul} -gt 0 ]; then
  head -n$li |tail -n$(($ul-$li)); fi;
 done|sed -e s?\<[/]*script\\\([^\>]*\\\)\>?/\*\\1*/?g
