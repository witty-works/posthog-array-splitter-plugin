async function setupPlugin({ config, global }) {
    global.jsonPath = config.json_path.split('.');
    global.eventName = config.event_name;
}

async function processEvent(event, { global, storage }) {
    let path = global.jsonPath;
    let properties = event.properties;
    let eventId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);

    while (path.length && path[0] in properties) {
        properties = properties[path[0]];
        path.shift();
    }

    if (properties instanceof Array) {
        properties.forEach(function (element) {
            element['array_splitter_parent_id'] = eventId;
            posthog.capture(global.eventName, element);
        })

        event['array_splitter_id'] = eventId;
    }

    return event;
}

module.exports = {
    setupPlugin,
    processEvent,
}
