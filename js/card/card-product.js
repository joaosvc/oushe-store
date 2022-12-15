export default class CardProduct 
{
    constructor(title)
    {
        this.title = title;
        this.createCard();
    }

    createCard()
    {
        let card = document.createElement("div");
        let logo = document.createElement("div");
        let info = document.createElement("div");
        let title = document.createElement("div");
        let price = document.createElement("div");
        let parcels = document.createElement("div");
        let remaining = document.createElement("div");

        let titleSpan = document.createElement("span");
        let logoImage = document.createElement("img");
        let priceRow = document.createElement("span");
        let priceSymbol = document.createElement("span");
        let priceWhole = document.createElement("span");
        let priceDecimals = document.createElement("span");
        let priceOffscreen = document.createElement("span");
        let priceOffscreenSpan = document.createElement("span");
        let parcelsSpan = document.createElement("span");
        let remainingSpan = document.createElement("span");
        let remainingCount = document.createElement("span");

        card.className = "product";
        logo.className = "logo";
        info.className = "info";
        title.className = "title";
        price.className = "price";
        priceRow.className = "row";
        priceSymbol.className = "symbol";
        priceWhole.className = "whole";
        priceDecimals.className = "decimals";
        priceOffscreenSpan.className = "offscreen";
        parcels.className = "parcels-size";
        remaining.className = "remainig";
        remainingCount.className = "count";

        priceRow.append(priceSymbol);
        priceRow.append(priceWhole);
        priceRow.append(priceDecimals);
        priceOffscreen.append(priceOffscreenSpan);

        title.append(titleSpan);
        price.append(priceRow);
        price.append(priceOffscreen);
        parcels.append(parcelsSpan);
        remaining.append(remainingSpan);
        remaining.append(remainingCount);

        logo.append(logoImage);
        info.append(title);
        info.append(price);
        info.append(parcels);
        info.append(remaining);

        card.append(logo);
        card.append(info);
        
        this.card = card;
        this.logoElement = logoImage;
        this.titleElement = titleSpan;
        this.priceSymbolElement = priceSymbol;
        this.priceWholeElement = priceWhole;
        this.priceDecimalsElement = priceDecimals;
        this.priceOffscreenElement = priceOffscreenSpan;
        this.parcelsElement = parcelsSpan;
        this.remainingElement = remainingSpan;
        this.remainingCountElement = remainingCount;
    }

    getCard()
    {
        return this.card;
    }

    setImage(image)
    {
        this.logoElement.src = image;
    }

    setImageAlt(alt)
    {
        this.logoElement.alt = alt;
    }
    
    setTitle(title)
    {
        this.titleElement.innerText = title;
    }

    setPriceSymbol(symbol)
    {
        this.priceSymbolElement.innerText = symbol;
    }

    setPriceWhole(whole)
    {
        this.priceWholeElement.innerText = whole;
    }

    setPriceDecimals(decimals)
    {
        this.priceDecimalsElement.innerText = decimals;
    }

    setPriceOffscreen(offScreen)
    {
        this.priceOffscreenElement.innerText = offScreen;
    }

    setParcels(parcels)
    {
        this.parcelsElement.innerText = parcels;
    }

    setRemaining(remainig)
    {
        this.remainingElement.innerText = remainig;
    }

    setRemainingCount(count)
    {
        this.remainingCountElement.innerText = count;
    }
}   