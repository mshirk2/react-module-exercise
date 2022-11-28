function choice(items){
    return items[Math.floor(Math.random() * items.length)]
}

function remove(item, items){
    const idx = items.indexOf(item);
    return items.splice(idx, 1);
}

export {choice, remove}