#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ -n "$HUSKY_DEBUG" ] && echo "husky: $*"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."
  if [ -z "$husky_skip_init" ]; then
    if [ -f ~/.huskyrc ]; then
      debug "~/.huskyrc is deprecated, use ~/.huskyrc.sh"
      . ~/.huskyrc
    fi
    if [ -f ~/.huskyrc.sh ]; then
      debug "loading ~/.huskyrc.sh"
      . ~/.huskyrc.sh
    fi
  fi
  export readonly husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"
  debug "done $hook_name, exit code $exitCode"
  exit "$exitCode"
fi