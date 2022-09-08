function choice(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function remove(items, item) {
    let removalIndex = items.indexOf(item);
    items.splice(removalIndex, 1);
    return items;
}

export { choice, remove };