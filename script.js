const rst = document.getElementById('pt2');

function ver() {
    const data = document.getElementById('data').value;
    const key = "X7dezN2ZeeneIVNez2zogt7ZCRFYO2gTcc3sVPSR";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            let content = `<h2>${json.title}</h2><div id="all">`;

            if (json.media_type === "image") {
                content += `<img id="image" src="${json.url}" alt="${json.title}">`;
            } else if (json.media_type === "video") {
                content += `<iframe id="image" src="${json.url}" frameborder="0" allowfullscreen></iframe>`;
            } else {
                content += `<p>Tipo de mídia não suportado: ${json.media_type}</p>`;
            }

            content += `<p>${json.explanation}</p></div>`;
            rst.innerHTML = content;
        })
        .catch(err => {
            rst.innerHTML = `<p>Erro ao buscar o conteúdo: ${err}</p>`;
        });
}
