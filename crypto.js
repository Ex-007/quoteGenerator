
let openMenu = document.getElementById('openMenu')
let footerSmaller = document.getElementById('footerSmaller')
let closeMenu = document.getElementById('closeMenu')

openMenu.addEventListener('click', () => {
    if(footerSmaller.style.display == 'none'){
        footerSmaller.style.display = 'block'
        openMenu.style.display = 'none'
    }
})

closeMenu.addEventListener('click', () => {
    if(footerSmaller.style.display == 'block'){
        footerSmaller.style.display = 'none'
        openMenu.style.display = 'block'
    }
})


// https://api.coincap.io/v2/assets/bitcoin

let searchBox = document.getElementById('searchBox')
let searchBtn = document.getElementById('searchBtn')
let mainDisplay = document.getElementById('mainDisplay')


searchBtn.addEventListener('click', () => {
    let inputValue = searchBox.value
    if(inputValue == ''){
        alert('field cannot be empty')
    }else{
        fetch(`https://api.coincap.io/v2/assets/${inputValue}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            mainDisplay.style.display = 'block'
            let coinName = document.getElementById('coinName')
            coinName.textContent = 'Name : ' + data.data.name

            let coinSymbol = document.getElementById('coinSymbol')
            coinSymbol.textContent = 'Symbol : ' + data.data.symbol

            let changePercent24Hr = document.getElementById('changePercent24Hr')
            changePercent24Hr.textContent = 'Percentage Change in 24H : ' + data.data.changePercent24Hr + ' %'

            let maxSupply = document.getElementById('maxSupply')
            maxSupply.textContent = 'Max Supply : ' + data.data.maxSupply

            let rank = document.getElementById('rank')
            rank.textContent = 'Rank : ' + data.data.rank

            let supply = document.getElementById('supply')
            supply.textContent = 'Supply : ' + data.data.supply

            let volume24 = document.getElementById('volume24')
            volume24.textContent = 'Volume Usd 24Hr : ' + data.data.volumeUsd24Hr

            let price = document.getElementById('price')
            price.textContent = 'Price : ' + '$' + data.data.priceUsd

            let marketCap = document.getElementById('marketCap')
            marketCap.textContent = 'Market Cap : ' + data.data.marketCapUsd
        })
    }
})

searchBox.addEventListener('keydown', () => {
    let EnterKey = event.key
    let inputValue = searchBox.value
    if(EnterKey == 'Enter' && inputValue == ''){
        alert('field cannot be empty')
    }else if(EnterKey == 'Enter'){
        fetch(`https://api.coincap.io/v2/assets/${inputValue}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            mainDisplay.style.display = 'block'
            let coinName = document.getElementById('coinName')
            coinName.textContent = 'Name : ' + data.data.name

            let coinSymbol = document.getElementById('coinSymbol')
            coinSymbol.textContent = 'Symbol : ' + data.data.symbol

            let changePercent24Hr = document.getElementById('changePercent24Hr')
            changePercent24Hr.textContent = 'Percentage Change in 24H : ' + data.data.changePercent24Hr + ' %'

            let maxSupply = document.getElementById('maxSupply')
            maxSupply.textContent = 'Max Supply : ' + data.data.maxSupply

            let rank = document.getElementById('rank')
            rank.textContent = 'Rank : ' + data.data.rank

            let supply = document.getElementById('supply')
            supply.textContent = 'Supply : ' + data.data.supply

            let volume24 = document.getElementById('volume24')
            volume24.textContent = 'Volume Usd 24Hr : ' + data.data.volumeUsd24Hr

            let price = document.getElementById('price')
            price.textContent = 'Price : ' + '$' + data.data.priceUsd

            let marketCap = document.getElementById('marketCap')
            marketCap.textContent = 'Market Cap : ' + data.data.marketCapUsd

        })
        .catch(error => {
            console.error(error);
        })
        searchBox.value = ''
    }
})


// SEARCHING WITH ID
function displayCoinDetails(){
        fetch('https://api.coincap.io/v2/assets/bitcoin')
        .then(response => {
            return response.json()
        })
        .then(data => {
                mainDisplay.style.display = 'block'

                let coinName = document.getElementById('coinName')
                coinName.textContent = 'Name : ' + data.data.name

                let coinSymbol = document.getElementById('coinSymbol')
                coinSymbol.textContent = 'Symbol : ' + data.data.symbol

                let changePercent24Hr = document.getElementById('changePercent24Hr')
                changePercent24Hr.textContent = 'Percentage Change in 24H : ' + data.data.changePercent24Hr + ' %'

                let maxSupply = document.getElementById('maxSupply')
                maxSupply.textContent = 'Max Supply : ' + data.data.maxSupply

                let rank = document.getElementById('rank')
                rank.textContent = 'Rank : ' + data.data.rank

                let supply = document.getElementById('supply')
                supply.textContent = 'Supply : ' + data.data.supply

                let volume24 = document.getElementById('volume24')
                volume24.textContent = 'Volume Usd 24Hr : ' + data.data.volumeUsd24Hr

                let price = document.getElementById('price')
                price.textContent = 'Price : ' + '$' + data.data.priceUsd

                let marketCap = document.getElementById('marketCap')
                marketCap.textContent = 'Market Cap : ' + data.data.marketCapUsd

                let time = document.getElementById('time')


               console.log(data);
          })
        .catch(error => {
                console.error(error);
        })
}

displayCoinDetails()




// CANDLES
// api.coincap.io/v2/candles?exchange=poloniex&interval=h8&baseId=ethereum&quoteId=bitcoin

// SEARCH BY HISTORY
// api.coincap.io/v2/assets/bitcoin/history?interval=d1

// SEARCH BY MARKET
// api.coincap.io/v2/assets/bitcoin/markets

// SEARCH BY RATES
// api.coincap.io/v2/rates/bitcoin

// EXCHANGE BY ID
// api.coincap.io/v2/exchanges/kraken

// GETTING THE MARKET CAP
// api.coincap.io/v2/markets




// Function to convert timestamp to normal time
// function convertTimestampToTime(timestamp) {
    // Create a new Date object with the timestamp in milliseconds
    // var date = new Date(timestamp);

    // Extract the various components of the date
    // var year = date.getFullYear();
    // var month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    // var day = ('0' + date.getDate()).slice(-2);
    // var hours = ('0' + date.getHours()).slice(-2);
    // var minutes = ('0' + date.getMinutes()).slice(-2);
    // var seconds = ('0' + date.getSeconds()).slice(-2);

    // Construct the normal time string
    // var normalTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    // return normalTime;
// }

// Example usage with the timestamp 1531180800000
// var timestamp =1531209600000;
// var normalTime = convertTimestampToTime(timestamp);
// console.log(normalTime);



















































// let bitcoin = document.getElementById('bitcoin');
// let ethereum = document.getElementById('ethereum');
// let tether = document.getElementById('tether');

// let btclogo = document.getElementById('btclogo');
// let ethereumLogo = document.getElementById('ethereumLogo');
// let tetherLogo = document.getElementById('tetherLogo');

// let bitcoinOP = document.getElementById('bitcoinOP');
// let ethereumOP = document.getElementById('ethereumOP');
// let tetherOP = document.getElementById('tetherOP');
// let ripple = document.getElementById('ripple');
// let usd_coin = document.getElementById('usd_coin');
// let staked_ether = document.getElementById('staked_ether');
// let cardano = document.getElementById('cardano');
// let solana = document.getElementById('solana');
// let dogecoin = document.getElementById('dogecoin');
// let matic_network = document.getElementById('matic_network');
// let tron = document.getElementById('tron');
// let litecoin = document.getElementById('litecoin');
// let polkadot = document.getElementById('polkadot');
// let avalanche_2 = document.getElementById('avalanche_2');
// let bitcoin_cash = document.getElementById('bitcoin_cash');
// let shiba_inu = document.getElementById('shiba_inu');
// let wrapped_bitcoin = document.getElementById('wrapped_bitcoin');
// let Uniswap = document.getElementById('Uniswap');
// let dai = document.getElementById('dai');
// let binancecoin = document.getElementById('binancecoin');


// let secretDisplay = document.getElementById('secretDisplay');




// let url = 'https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2C%20Ethereum%2C%20Dogecoin&vs_currencies=USD';

//DISPLAYING FIRST 100 COINS IN PAGE 1
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=3

//DISPLAYING FIRST 100 COINS IN PAGE 1
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=3

//DISPLAYING FIRST 100 COINS IN PAGE 1
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=3


// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
// .then(response => {
//     return response.json()
//     // console.log(response)
// })
// .then(data => {
//     bitcoin.innerHTML = data[0].current_price;
//     btclogo.innerHTML = `<img src=${data[0].image} >`

//     ethereum.innerHTML = data[1].current_price
//     ethereumLogo.innerHTML = `<img src=${data[1].image} >`

//     tether.innerHTML = data[2].current_price
//     tetherLogo.innerHTML = `<img  src=${data[2].image} >`


//     let symbolic = document.getElementById('symbolic');
//     symbolic.innerHTML = data[0].name;

//     let ath = document.getElementById('ath');
//     ath.innerHTML = data[0].ath;

//     let circulating_supply = document.getElementById('circulating_supply');
//     circulating_supply.innerHTML = data[0].circulating_supply;

//     let atl = document.getElementById('atl');
//     atl.innerHTML = data[0].atl;

//     let current_price = document.getElementById('current_price');
//     current_price.innerHTML = data[0].current_price;

//     let high_24h = document.getElementById('high_24h');
//     high_24h.innerHTML = data[0].high_24h;

//     let low_24h = document.getElementById('low_24h');
//     low_24h.innerHTML = data[0].low_24h;

//     let market_cap = document.getElementById('market_cap');
//     market_cap.innerHTML = data[0].market_cap;

//     let market_cap_rank = document.getElementById('market_cap_rank');
//     market_cap_rank.innerHTML = data[0].market_cap_rank;

//     let max_supply = document.getElementById('max_supply');
//     max_supply.innerHTML = data[0].max_supply;

//     let total_supply = document.getElementById('total_supply');
//     total_supply.innerHTML = data[0].total_supply;

//     let total_volume = document.getElementById('total_volume');
//     total_volume.innerHTML = data[0].total_volume;

//     let price_change_24h = document.getElementById('price_change_24h');
//     price_change_24h.innerHTML = data[0].price_change_24h;

//     console.log(data)
// })
// .catch(error => {
//     console.error(error)
// })


// let optionDiv = document.getElementById("optionDiv")


// optionDiv.addEventListener('change', function (){
//     const selectedOption = optionDiv.options[optionDiv.selectedIndex];
//     const selectedValue = selectedOption.value;
    
//     if(selectedValue === 'ripple'){

//     fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[3].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[3].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[3].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[3].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[3].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[3].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[3].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[3].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[3].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[3].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[3].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[3].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[3].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });

//         console.log('you selected ripple');
//     }else if(selectedValue === 'ethereum'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[1].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[1].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[1].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[1].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[1].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[1].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[1].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[1].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[1].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[1].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[1].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[1].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[1].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected ethereum');
//     }else if(selectedValue === 'tether'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[2].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[2].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[2].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[2].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[2].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[2].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[2].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[2].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[2].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[2].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[2].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[2].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[2].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected tether');
//     }else if(selectedValue === 'Bitcoin'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[0].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[0].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[0].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[0].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[0].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[0].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[0].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[0].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[0].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[0].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[0].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[0].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[0].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected Bitcoin');
//     }else if(selectedValue === 'binancecoin'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[4].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[4].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[4].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[4].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[4].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[4].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[4].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[4].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[4].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[4].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[4].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[4].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[4].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected binancecoin');
//     }else if(selectedValue === 'usd_coin'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[5].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[5].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[5].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[5].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[5].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[5].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[5].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[5].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[5].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[5].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[5].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[5].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[5].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected usd_coin');
//     }else if(selectedValue === 'staked_ether'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[6].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[6].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[6].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[6].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[6].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[6].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[6].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[6].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[6].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[6].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[6].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[6].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[6].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected staked_ether');
//     }else if(selectedValue === 'cardano'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[7].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[7].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[7].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[7].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[7].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[7].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[7].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[7].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[7].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[7].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[7].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[7].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[7].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected cardano');
//     }else if(selectedValue === 'solana'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[8].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[8].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[8].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[8].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[8].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[8].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[8].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[8].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[8].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[8].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[8].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[8].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[8].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected solana');
//     }else if(selectedValue === 'dogecoin'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[9].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[9].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[9].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[9].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[9].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[9].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[9].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[9].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[9].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[9].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[9].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[9].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[9].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected dogecoin');
//     }else if(selectedValue === 'matic_network'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[10].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[10].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[10].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[10].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[10].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[10].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[10].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[10].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[10].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[10].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[10].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[10].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[10].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected matic_network');
//     }else if(selectedValue === 'tron'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[11].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[11].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[11].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[11].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[11].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[11].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[11].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[11].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[11].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[11].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[11].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[11].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[11].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected tron');
//     }else if(selectedValue === 'litecoin'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[12].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[12].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[12].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[12].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[12].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[12].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[12].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[12].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[12].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[12].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[12].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[12].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[12].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected litecoin');
//     }else if(selectedValue === 'polkadot'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[13].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[13].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[13].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[13].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[13].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[13].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[13].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[13].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[13].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[13].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[13].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[13].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[13].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected polkadot');
//     }else if(selectedValue === 'avalanche_2'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[14].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[14].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[14].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[14].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[14].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[14].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[14].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[14].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[14].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[14].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[14].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[14].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[14].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected avalanche_2');
//     }else if(selectedValue === 'bitcoin_cash'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[15].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[15].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[15].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[15].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[15].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[15].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[15].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[15].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[15].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[15].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[15].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[15].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[15].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected bitcoin_cash');
//     }else if(selectedValue === 'shiba_inu'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[17].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[17].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[17].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[17].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[17].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[17].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[17].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[17].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[17].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[17].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[17].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[17].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[17].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected shiba_inu');
//     }else if(selectedValue === 'wrapped_bitcoin'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[16].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[16].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[16].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[16].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[16].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[16].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[16].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[16].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[16].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[16].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[16].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[16].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[16].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected wrapped_bitcoin');
//     }else if(selectedValue === 'uniswap'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[18].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[18].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[18].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[18].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[18].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[18].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[18].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[18].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[18].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[18].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[18].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[18].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[18].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected uniswap');
//     }else if(selectedValue === 'dai'){

//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let symbolic = document.getElementById('symbolic');
//         symbolic.innerHTML = data[19].name;

//         let ath = document.getElementById('ath');
//         ath.innerHTML = data[19].ath;
    
//         let circulating_supply = document.getElementById('circulating_supply');
//         circulating_supply.innerHTML = data[19].circulating_supply;
    
//         let atl = document.getElementById('atl');
//         atl.innerHTML = data[19].atl;
    
//         let current_price = document.getElementById('current_price');
//         current_price.innerHTML = data[19].current_price;
    
//         let high_24h = document.getElementById('high_24h');
//         high_24h.innerHTML = data[19].high_24h;
    
//         let low_24h = document.getElementById('low_24h');
//         low_24h.innerHTML = data[19].low_24h;
    
//         let market_cap = document.getElementById('market_cap');
//         market_cap.innerHTML = data[19].market_cap;
    
//         let market_cap_rank = document.getElementById('market_cap_rank');
//         market_cap_rank.innerHTML = data[19].market_cap_rank;
    
//         let max_supply = document.getElementById('max_supply');
//         max_supply.innerHTML = data[19].max_supply;
    
//         let total_supply = document.getElementById('total_supply');
//         total_supply.innerHTML = data[19].total_supply;
    
//         let total_volume = document.getElementById('total_volume');
//         total_volume.innerHTML = data[19].total_volume;
    
//         let price_change_24h = document.getElementById('price_change_24h');
//         price_change_24h.innerHTML = data[19].price_change_24h;
//     })
//     .catch(error => {
//         console.error(error)
//     });
//         console.log('you selected dai');
//     }else{
//         console.log('error');
//     }
// })















// fetch('https://api.dictionaryapi.dev/api/v2/entries/en/close')
// .then(resonse => {
//     return resonse.json()
// })
// .then(data => {

//     let allDetails = document.getElementById('allDetails')
//     let meanings = data[0].meanings
//     meanings.forEach(element => {
//         let definitions = Object.entries(element.definitions)
//        definitions.forEach(realOne => {
//         let inner = realOne[1].definition
//         allDetails.textContent += inner + '\n'
//         console.log(inner)
//        })
//     });

// })
// .catch(error => {
//     console.error(error);
// })