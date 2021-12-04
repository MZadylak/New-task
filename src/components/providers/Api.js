class Api {
    link = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'

    loadData = () => {
        return this._fetch();
    }

    _fetch = async () => {
        try {
            const request = await fetch(this.link);
            if(request.ok) {
                const response = await request.json();
                return response;
            }
            throw new Error('Wrong address!');
        } catch (error) {
            console.error('Unidentified error', error);
        }
    }
}

export default Api;