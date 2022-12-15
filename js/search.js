const searchItens = $(".nav .search-itens");
const searchInput = $(".nav .search input");

const completeSearchBy = (value) => {
    searchInput.val(value);
    doneSearch();
}

const getSearchContents = () => {
    return [
        "Minecraft",
        "Jogo de tiro",
        "Drift",
        "Ventilador Digital",
        "Controladora de Ar-condicionado",
        "Genshin Impact",
        "Meu Onibus Fortaleza",
        "Xiaomi",
        "Samsumg",
        "Gta San Andreas",
        "Pão com ovo",
        "spinda",
        "Cachorro pidão",
        "Fone de Ouvido com fio wireless",
        "Cabo sem fio para Xbox 360 Original",
        "Computador Celeron 62gb/Gta V"
    ];
}

const findByKey = (search) => {
    let results = [];
    let contents = getSearchContents();
    search = search.toLowerCase();

    let index = 0;
    contents.forEach((line) => {
        let indexOf = line.toLocaleLowerCase().indexOf(search);
        if (indexOf !== -1) {
            results[index++] = {
                line: line,
                indexOf: indexOf
            };
        } 
    });
    return results;
}

const processSearch = (search) => {
    searchItens.html("");
    if (search === "") {
        return;
    }

    let results = findByKey(search);
    let index = 0;
    results.forEach((result) => {
        if (index++ >= 7) {
            return false;
        }

        let indexOf = result.indexOf;
        let line = result.line;
        let subResult = line.substr(indexOf, search.length);

        let div = document.createElement("div");
        let span = document.createElement("span");
        let bold = line.replace(subResult, "<b>" + subResult + "</b>");

        span.insertAdjacentHTML("beforeend", bold);
        div.append(span);

        div.classList.add("item");
        div.classList.add("search-item");
        div.id = line;

        searchItens.append(div);
    });
        
    /* ADD ITEM EVENT HANDLE */
    searchItens.children(".item").click((item) => completeSearchBy(item.currentTarget.id));
}

const doneSearch = () => {
    let search = searchInput.val();

    console.log(search)
}

export { processSearch, doneSearch };