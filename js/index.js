const API_URL = 'https://xchain.io/api/'
let cards = []
const showMissingBalances = true

// http://www.julianhaight.com/btcvalid.js
!function(){function r(r,t,e){var a;return a=Math.ceil(t/bpe)+1,a=e>a?e:a,buff=new Array(a),n(buff,r),buff}function n(r,t){var n,e;for(e=t,n=0;n<r.length;n++)r[n]=e&mask,e>>=bpe}function e(r,t){return t>>>r|t<<32-r}function a(r,t,n){return r&t^~r&n}function o(r,t,n){return r&t^r&n^t&n}function u(r){return e(2,r)^e(13,r)^e(22,r)}function f(r){return e(6,r)^e(11,r)^e(25,r)}function s(r){return e(7,r)^e(18,r)^r>>>3}function i(r){return e(17,r)^e(19,r)^r>>>10}function c(r,t){return r[15&t]+=i(r[t+14&15])+r[t+9&15]+s(r[t+1&15])}function _(r,t){var n=(65535&r)+(65535&t),e=(r>>16)+(t>>16)+(n>>16);return e<<16|65535&n}function h(){A=new Array(8),y=new Array(2),C=new Array(64),y[0]=y[1]=0,A[0]=1779033703,A[1]=3144134277,A[2]=1013904242,A[3]=2773480762,A[4]=1359893119,A[5]=2600822924,A[6]=528734635,A[7]=1541459225}function v(){var r,t,n,e,s,i,h,v,g,b,d=new Array(16);r=A[0],t=A[1],n=A[2],e=A[3],s=A[4],i=A[5],h=A[6],v=A[7];for(var m=0;16>m;m++)d[m]=C[(m<<2)+3]|C[(m<<2)+2]<<8|C[(m<<2)+1]<<16|C[m<<2]<<24;for(var p=0;64>p;p++)g=v+f(s)+a(s,i,h)+k[p],g+=16>p?d[p]:c(d,p),b=u(r)+o(r,t,n),v=h,h=i,i=s,s=_(e,g),e=n,n=t,t=r,r=_(g,b);A[0]+=r,A[1]+=t,A[2]+=n,A[3]+=e,A[4]+=s,A[5]+=i,A[6]+=h,A[7]+=v}function g(r,t){var n,e,a=0;e=y[0]>>3&63;var o=63&t;for((y[0]+=t<<3)<t<<3&&y[1]++,y[1]+=t>>29,n=0;t>n+63;n+=64){for(var u=e;64>u;u++)C[u]=r.charCodeAt(a++);v(),e=0}for(var u=0;o>u;u++)C[u]=r.charCodeAt(a++)}function b(){var r=y[0]>>3&63;if(C[r++]=128,56>=r)for(var t=r;56>t;t++)C[t]=0;else{for(var t=r;64>t;t++)C[t]=0;v();for(var t=0;56>t;t++)C[t]=0}C[56]=y[1]>>>24&255,C[57]=y[1]>>>16&255,C[58]=y[1]>>>8&255,C[59]=255&y[1],C[60]=y[0]>>>24&255,C[61]=y[0]>>>16&255,C[62]=y[0]>>>8&255,C[63]=255&y[0],v()}function d(){for(var r=new String,t=0;8>t;t++)for(var n=28;n>=0;n-=4)r+=x.charAt(A[t]>>>n&15);return r}function m(r){return h(),g(r,r.length),b(),d()}function p(r){if(0===r.length)return[];var t,n,e=[0];for(t=0;t<r.length;t++){var a=r[t];if(!(a in S))throw new Error("Non-base58 character");for(n=0;n<e.length;n++)e[n]*=D;e[0]+=S[a];var o=0;for(n=0;n<e.length;++n)e[n]+=o,o=e[n]>>8,e[n]&=255;for(;o;)e.push(255&o),o>>=8}for(t=0;"1"===r[t]&&t<r.length-1;t++)e.push(0);for(e=e.reverse(),output="",t=0;t<e.length;t++)output+=String.fromCharCode(e[t]);return output}function l(r){try{var t=p(r);if(25!=t.length)return!1;var n=t.substr(t.length-4),e=t.substr(0,t.length-4),a=w(m(w(m(e)))).substr(0,4);return n!=a?!1:!0}catch(o){return!1}}function w(r){for(var t="",n=0;n<r.length;n+=2)t+=String.fromCharCode(parseInt(r.substr(n,2),16));return t}for(bpe=0,mask=0,radix=mask+1,digitsStr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\'\"+-",bpe=0;1<<bpe+1>1<<bpe;bpe++);bpe>>=1,mask=(1<<bpe)-1,radix=mask+1,one=r(1,1,1),t=new Array(0),ss=t,s0=t,s1=t,s2=t,s3=t,s4=t,s5=t,s6=t,s7=t,T=t,sa=t,mr_x1=t,mr_r=t,mr_a=t,eg_v=t,eg_u=t,eg_A=t,eg_B=t,eg_C=t,eg_D=t,md_q1=t,md_q2=t,md_q3=t,md_r=t,md_r1=t,md_r2=t,md_tt=t,primes=t,pows=t,s_i=t,s_i2=t,s_R=t,s_rm=t,s_q=t,s_n1=t,s_a=t,s_r2=t,s_n=t,s_b=t,s_d=t,s_x1=t,s_x2=t,s_aa=t,rpprb=t;for(var A,y,C,k=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),x="0123456789abcdef",q="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",S={},B=0;B<q.length;B++)S[q.charAt(B)]=B;var D=58;window.checkAddress=l}();

const form = document.querySelector('form')
const header = document.querySelector('#header')
const tableForm = document.querySelector('#table_form')
const result = document.querySelector('#result')
const result_missing = document.querySelector('#result_missing')

const formatValue = (value, decimals = 2, style = 'decimal') =>
    new Intl.NumberFormat('en-US', {
        style,
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value)
                
const get_address = (address, page = 1) => fetch(`${API_URL}address/${address}`).then((response) => response.json())

const get_balances = (address, page = 1) => fetch(`${API_URL}balances/${address}/${page}`).then((response) => response.json())

const get_all_balances = async (address) => {
    let balances = [], pepe_balances = [], missing_balances = []

    const address_info = await get_address(address)
    const asset_count = address_info.assets.held
    const max = Math.ceil(asset_count / 500)

    for(let i=1; i<=max; i++) {
        const chunk = await get_balances(address, i)

        balances = balances.concat(chunk.data)
    }

    balances.forEach(balance => {
        const { asset, quantity } = balance
        const hit = cards.filter(c => c.name === asset)[0]
        
        if(hit) {
            pepe_balances.push(balance)
        }
    })

    cards.forEach(card => {
        const { name } = card
        const hit = balances.filter(b => b.asset === name)[0]

        if(!hit) {
            missing_balances.push(card)
        }
    })

    return [pepe_balances, missing_balances]
}

const get_table_html = pepe_balances => {
    let html = 
        `<table id="balances" class="table mb-5">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th class="text-end" style="padding-right: 20px;" scope="col">Series</th>
                    <th class="text-end" style="padding-right: 20px;" data-sort-method="none" scope="col" class="text-nowrap">Card #</th>
                    <th class="text-end" style="padding-right: 50px;" scope="col">Quantity</th>
                    <th class="text-end" style="padding-right: 50px;" scope="col">Percentage of supply</th>
                    <th class="text-end" style="padding-right: 50px;" scope="col">Active Supply</th>
                    <th class="text-end" scope="col">Links</th>
                </tr>
            </thead>
        <tbody>`
    
    pepe_balances.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).forEach(pepebal => {
        const { asset, quantity } = pepebal
        const card = cards.filter(c => c.name === asset)[0]
        const { quantity: supply, index, series, order, burned, img_url, emblem_vault } = card
        const active_supply = supply - burned

        html += 
        `<tr data-quantity="${quantity}">
            <td data-sort="${(index.toString().padStart(2, '0')).padStart(4, '0')}">
                ${index}
            </td>
            <td data-sort="${asset}" class="text-nowrap">
                <span data-bs-toggle="popover" data-bs-title="${asset} image" data-bs-content="${img_url}">🏞</span>
                ${asset}
            </td>
            <td class="text-end" style="padding-right: 20px;" data-sort="${(series.toString().padStart(2, '0') + order.toString().padStart(2, '0')).padStart(4, '0')}">
                ${series}
            </td>
            <td class="text-end" style="padding-right: 20px;">
                ${order}
            </td>
            <td class="text-end" style="padding-right: 50px;" data-sort="${quantity.toString().padStart(20, '0')}">
                ${parseFloat(quantity) < 1 ? quantity : formatValue(quantity, 0)}
            </td>
            <td class="text-end" style="padding-right: 50px;" data-sort="${parseFloat(quantity / active_supply * 1000000000000).toFixed(0).padStart(20, '0')}">
                ${parseFloat(quantity / active_supply * 100).toFixed(2)} %
            </td>
            <td class="text-end" style="padding-right: 50px;" data-sort="${parseInt(active_supply * 100000000, 10).toString().padStart(20, '0')}">
                ${formatValue(active_supply, 0)}
                ${!!burned && parseInt(burned) > 0 ? `&nbsp;&nbsp;<span class="bg-warning p-1 ml-1" title="Total supply is ${formatValue(supply, 0)}, but with ${formatValue(burned, 0)} burned that makes an active supply of ${formatValue(active_supply, 0)}"> ${formatValue(burned, 0)} 🔥 </span>` : ''}
            </td>
            <td class="links text-nowrap text-end">
                <a href="https://xchain.io/asset/${asset}" target="_blank"><img src="logos/xchain.png" /></a>
                <a href="https://pepe.wtf/asset/${asset}" target="_blank"><img height="16" src="logos/pepewtf.png" /></a>
                ${emblem_vault ? `<a href="${emblem_vault}" target="_blank"><img src="logos/emblem.png" /></a>` : ''}
            </td>
        </tr>`
    })
    
    html +=
        `</tbody>
        </table>`
    
    return html                
}

const init_popovers = () => {
    document.querySelectorAll('[data-bs-toggle="popover"]')
        .forEach(popover => {
            let html = `<img src="${popover.getAttribute('data-bs-content')}" />`

            new bootstrap.Popover(popover, {
                animation: false,
                content: html,
                html: true,
                placement: 'bottom',
                trigger: 'hover'
            })
        })
}

const compare_balances = async (address, compareAddress) => {
    result.innerHTML = 'Loading balances for both addresses..'

    const [source_balances] = await get_all_balances(address)
    const [destination_balances] = await get_all_balances(compareAddress)
    
    let missing_balances = []

    destination_balances.forEach(balance => {
        const { asset, quantity } = balance
        const hit = source_balances.filter(c => c.asset === asset)[0]

        if(!hit) {
            missing_balances.push(balance)
        }
    })

    header.innerHTML = `<h4>Address ${compareAddress.substr(0, 6)}.. has ${missing_balances.length} Rare Pepe cards that address ${address.substr(0, 6)}.. doesn't have yet</h4>`

    if(missing_balances.length) {
        tableForm.classList.remove('d-none')
        result.innerHTML = get_table_html(missing_balances)
        
        new Tablesort(document.getElementById('balances'))

        init_popovers()
    }         
}

const check_balances = async (address) => {
    result.innerHTML = 'Loading balances..'

    const [pepe_balances, missing_balances] = await get_all_balances(address)

    header.innerHTML = `<h4>Address ${address} contains ${pepe_balances.length}/1774 (${parseFloat(pepe_balances.length / 1774 * 100).toFixed(2)} %) Rare Pepe cards!</h4>`
    result.innerHTML = get_table_html(pepe_balances)

    new Tablesort(document.getElementById('balances'))

    if(showMissingBalances && missing_balances.length) {
        result_missing.innerHTML += `<h4>Address ${address} is missing ${missing_balances.length}/1774 (${parseFloat(missing_balances.length / 1774 * 100).toFixed(2)} %) Rare Pepe cards</h4>`
    
        let html = 
            `<table id="missing_balances" class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th class="text-end" style="padding-right: 20px;" scope="col">Series</th>
                        <th class="text-end" style="padding-right: 20px;" scope="col">Card #</th>
                        <th class="text-end" style="padding-right: 50px;" scope="col">Active Supply</th>
                        <th class="text-end" scope="col">Links</th>
                    </tr>
                </thead>
            <tbody>`
        
        missing_balances.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).forEach(bal => {
            const { name: asset, quantity: supply, series, order, burned, img_url, emblem_vault } = bal
            const active_supply = supply - burned

            html += 
            `<tr>
                <td data-sort="${asset}">
                    <span data-bs-toggle="popover" data-bs-title="${asset} image" data-bs-content="${img_url}">🏞</span>
                    ${asset}
                </td>
                <td class="text-end" style="padding-right: 20px;" data-sort="${(series.toString().padStart(2, '0') + order.toString().padStart(2, '0')).padStart(4, '0')}">
                    ${series}
                </td>
                <td class="text-end" style="padding-right: 20px;">
                    ${order}
                </td>
                <td class="text-end" style="padding-right: 50px;" data-sort="${parseInt(active_supply * 100000000, 10).toString().padStart(20, '0')}">
                    ${formatValue(active_supply, 0)}
                    ${!!burned && parseInt(burned) > 0 ? `&nbsp;&nbsp;<span class="bg-warning p-1 ml-1" title="Total supply is ${formatValue(supply, 0)}, but with ${formatValue(burned, 0)} burned that makes an active supply of ${formatValue(active_supply, 0)}"> ${formatValue(burned, 0)} 🔥 </span>` : ''}
                </td>
                <td class="links text-nowrap text-end">
                    <a href="https://xchain.io/asset/${asset}" target="_blank"><img src="logos/xchain.png" /></a>
                    <a href="https://pepe.wtf/asset/${asset}" target="_blank"><img height="16" src="logos/pepewtf.png" /></a>
                    ${emblem_vault ? `<a href="${emblem_vault}" target="_blank"><img src="logos/emblem.png" /></a>` : ''}
                </td>
            </tr>`
        })
        
        html +=
            `</tbody>
            </table>`
        
        result_missing.innerHTML += html
        result_missing.style.display = 'block'

        new Tablesort(document.getElementById('missing_balances'))
    }

    init_popovers()
}

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})

function validateAddress(address) {
    if(checkAddress(address) || checkbech32(address) === 'OK') {
        if(params?.address !== address) {
            window.history.pushState('', '', `?address=${address}`)
        } else {
            console.log(`${params.address} and ${address} are the same, no need to update the query param`)
        }

        check_balances(address)
    } else if(address !== '') {
        result.innerHTML = `<div class="alert alert-warning" role="alert">
            This isn't a valid BTC/XCP address
        </div>`
    }
}

function validateCompareAddress(address, compareAddress) {
    if((checkAddress(address) || checkbech32(address) === 'OK') && (checkAddress(compareAddress) || checkbech32(compareAddress) === 'OK')) {
        if(params?.address !== address || params?.compare !== compareAddress) {
            window.history.pushState('', '', `?address=${address}&compare=${compareAddress}`)
        }

        compare_balances(address, compareAddress)
    } else if(address !== '' && compareAddress !== '') {
        result.innerHTML = `<div class="alert alert-warning" role="alert">
            One of these isn't a valid BTC/XCP address
        </div>`
    }
}

function resetOverview() {
    tableForm.classList.add('d-none')
    document.querySelector('#hideSingleQuantities').checked = false
    header.innerHTML = ''
    result.innerHTML = ''
    result_missing.innerHTML = ''
}

const addEventHandlers = () => {
    form.querySelector('.btn-balances').addEventListener('click', event => {
        resetOverview()
    
        const address = document.querySelector('#btcAddress').value
    
        event.preventDefault()
    
        validateAddress(address)
    })
    
    form.querySelector('.btn-compare').addEventListener('click', event => {
        resetOverview()
    
        const address = document.querySelector('#btcAddress').value
        const compareAddress = document.querySelector('#compareAddress').value
    
        event.preventDefault()
    
        validateCompareAddress(address, compareAddress)
    })
    
    form.querySelector('.btn-switch').addEventListener('click', event => {
        event.preventDefault()
    
        resetOverview()
    
        const address = document.querySelector('#btcAddress').value
        const compareAddress = document.querySelector('#compareAddress').value
    
        document.querySelector('#btcAddress').value = compareAddress
        document.querySelector('#compareAddress').value = address
    
        validateCompareAddress(compareAddress, address)
    })
    
    document.querySelector('#hideSingleQuantities').addEventListener('change', event => {
        let isChecked = event.target.checked
    
        event.preventDefault()
    
        document.querySelectorAll('tr[data-quantity]').forEach(tr => {
            let qty = parseFloat(tr.dataset.quantity)
            if(qty <= 1) {
                tr.classList.toggle('d-none')
            }
        })
    })    
}

const init = async () => {
    cards = await fetch('./json/cards.json?ts=1712046401356').then(res=>res.json()).catch(e=>console.log(e))

    if(params?.address) {
        document.querySelector('#btcAddress').value = params.address
    
        if(params?.compare) {
            document.querySelector('#compareAddress').value = params.compare
    
            validateCompareAddress(params.address, params.compare)
        } else {
            validateAddress(params.address)
        }
    }
    
    addEventHandlers()
}

init()