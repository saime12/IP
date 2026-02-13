const url = 'https://api.ipapi.is'
const input = document.querySelector('#input')
const btn = document.querySelector('#button')
const vpn = document.querySelector('#VPN')
const company = document.querySelector('#company')
const info = document.querySelector('#info')

async function getData() {
    const response = await fetch(url + '?q=' + input.value)
    const data = await response.json()
    return data
}

const proxy = document.createElement("p")
info.appendChild(proxy)
const created = document.createElement("p")
info.appendChild(created)
const country = document.createElement("p")
info.appendChild(country)
const network = document.createElement("p")
info.appendChild(network)

btn.addEventListener('click', async function() {
    const data = await getData()
    vpn.textContent = "VPN:" + " " + data.is_vpn
    company.textContent = "company:" + " " + data.company.name
    proxy.textContent = "proxy:" + " " + data.is_proxy
    created.textContent = "was created:" + " " + data.asn.created
    country.textContent = "country:" + " " + data.location.country
    network.textContent = "network:" + " " + data.company.network
})