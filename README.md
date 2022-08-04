# Array Splitter Plugin

## Important!

This plugin will only work on events ingested **after** the plugin was enabled. This means it **will** register events as being the first if there were events that occured **before** it was enabled. To mitigate this, you could consider renaming the relevant events and creating an [action](https://posthog.com/docs/features/actions) that matches both the old event name and the new one.

## Usage

This PostHog plugin will create new events for any array elements at the specified location with the JSON of a specific event type.

It will add `array_splitter_id` to the event with a random ID and `array_splitter_parent_id` to the new events created with the same random ID.

## Credits

Heavily inspired by https://github.com/PostHog/first-time-event-tracker

Logo taken from https://icons8.com/icon/gSULe4i1JTpL/gabelung