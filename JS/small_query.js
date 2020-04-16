function jQuery(selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this
}

jQuery.prototype.each = function(fn) {
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}

jQuery.prototype.click = function(fn) {
    this.each(element => element.addEventListener('click', fn))
    return this
}

jQuery.prototype.hide = function() {
    this.each(element => element.style.display = 'none')
    return this;
}

jQuery.prototype.show = function() {
    this.each(element => element.style.display = '')
    return this;
}

jQuery.prototype.remove = function() {
    this.each(element => element.remove())
    return this;
}

jQuery.prototype.class = function(name) {
    this.each(element => element.className = name)
    return this;
}

jQuery.prototype.html = function(content) {
    if (content !== undefined) {
        this.each(element => element.innerHTML = content);
        return this;
    } else if (this.elements.length > 0) {
        elem = this.elements[0];
        return elem.innerHTML;
    }
}

jQuery.prototype.text = function(content) {
    if (content !== undefined) {
        this.each(element => element.innerText = content);
        return this;
    } else if (this.elements.length > 0) {
        res = ''
        this.elements.forEach(element => res += element.innerText)
        return res;
    }
}

jQuery.prototype.value = function(text) {
    if (text || text === '') {
        this.each(element => element.value = text);
        return this;
    }
    res = []
    if (this.elements.length > 1) {
        this.each(element => res.push(element.value))
        return res
    } else if (this.elements.length === 1) {
        return this.elements[0].value
    }
}

jQuery.prototype.disable = function() {
    this.each(element => element.disabled = true);
    return this
}

jQuery.prototype.enable = function() {
    this.each(element => element.disabled = false);
    return this
}

const $ = (e) => new jQuery(e);
