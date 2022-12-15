const loadPageContent = $(".load-page");
const main = $(".main");
const logout = $(".logout button");

import { initHandles } from './handles.js'; 
import createUser from './userData.js';
import Properties from './prop.js';
import Profile from './profile.js';
import { processSearch, doneSearch } from './search.js';
import CardProduct from './card/card-product.js';


let user, profile, properties;

initHandles();
setTimeout(() => {
    loadPageContent.fadeOut(900, () => {
        main.fadeIn(100);
    });
}, 100); //900

await $.ajax({
    url: "includes/cookieSession.php",
    dataType: "json",
    success: (result) => { 
        if (!result.cookie) {
            location.href = "signin";
        } else {
            console.log("New session with id: " + result.id);
        }
    },
    error: (e, msg) => { 
        console.log("Request error: " + msg);
    }
});

const initializeUser = async () => {
    user = await createUser();
    properties = new Properties(user);
    profile = new Profile(user);
}

//TODO:
const updateUser = () => {
    properties.updateAll();
    profile.addHandle();
    profile.updateAll();
}

const initializeAndUpdateUser = async () => {
    await initializeUser();
    updateUser();
}

const setElementFor = (element, element2, closure) => {
    element.click(() => element2.focus());
    if (closure) {
        closure();
    }
}

initializeAndUpdateUser();

// SEARCH 
const search = $(".nav .search");
const searchInput = search.children(".search-input");
const searchIcon = search.children(".search-icon");
const clearSearch = search.children(".clear-search");
const searchItens = search.children(".search-itens");

setElementFor(search, searchInput);
setElementFor(searchItens, searchInput, () => {
    $(document).click((event) => {
        if (searchItens.css("display") === "block") {
            let target = $(event.target);
            let targetClass = target.attr("class");
            let parents = target.parents();

            let closeItens = true;
            for (let index in parents) {
                let parent = parents[index];
                
                if (parent.className === search.attr("class")) {
                    closeItens = false;
                } 
                if (parent.className === "item search-item") {
                    closeItens = true;
                    break;
                }
            }

            if (targetClass === search.attr("class") && targetClass !== "item search-item") {
                searchItens.css("display", "block");
                closeItens = false;
            }

            if (targetClass === "item search-item") {
                closeItens = true;
            }
            
            if (closeItens === true) {
                searchItens.css("display", "none");
            }
        }
    });
});

searchInput.focus(() => {
    searchIcon.css("display", "none");
    searchItens.css("display", "block");
});

searchInput.focusout(() => {
    if (searchInput.val() === "") {
        searchIcon.css("display", "block");
    }
});

searchInput.keyup((event) => {
    if (event.which === 13) {
        doneSearch();
    }
    
    let search = searchInput.val();
    processSearch(search);
    searchItens.css("display", "block");
});

clearSearch.click(() => {
    searchInput.val("");
    searchInput.focus(); 
    searchInput.keyup();
});

/** GERAR ALGUNS PRODUTOS - TESTE */
for (let i = 1; i <= 12; i++) {
    let card = new CardProduct();
    card.setImage("https://m.media-amazon.com/images/I/71Dh+NR7ivL._AC_UL320_.jpg");
    card.setImageAlt("Apple iPhone 11 (64 GB) Verde");
    card.setTitle("Apple iPhone 11 (64 GB) Verde");
    card.setPriceSymbol("R$");
    card.setPriceWhole("4.732");
    card.setPriceDecimals("63");
    card.setPriceOffscreen("R$ 4.999,00");
    card.setParcels("Em até 10x de R$ 473,29 sem juros");
    card.setRemaining("Quantidade:");
    card.setRemainingCount("13");

    // add card
    $(".center .body").append(card.getCard());
}

/** LOGOUT */
logout.click(() => {
    $.ajax({
        url: 'includes/logout.php',
        success: () => {
            location.href = "signin";
        },
        error: () => {
            console.log("Request error: " + result);
        }
    });
});

export { updateUser, initializeUser, initializeAndUpdateUser };