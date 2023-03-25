export default {
    base: 'http://restapi/api-cafe',

    convertToFormData(data) {
        const form = new FormData();

        for (let field in data) {
            form.append(field, data[field]);
        }

        return form;
    },
    async get(route) {
        const response = await fetch(this.base + route);
        return this.handleResponse(response);
    },
    async post(route, data) {
        const response = await fetch(this.base + route, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return await this.handleResponse(response);
    },
    async postForm(route, data) {
        const response = await fetch(this.base + route, {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: this.convertToFormData(data),
        });
    },
    async handleResponse(response) {
        if (response.status >= 200 && response.status < 300) {
            const json = await response.json();
            return json.data;
        } else if(response.status >= 400 && response.status < 500) {
            const err = await response.json();
            alert(err.error.message);
            throw new Error(err.error.message);
        } else {
            alert('Server error');
            throw new Error('Server error');
        }

    }
}