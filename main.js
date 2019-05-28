let container = document.getElementById("container")
let fighters = ["samus", "roy", "link", "little_mac", "zelda", "dark_samus", "pikachu", "cloud", "ike"]
function change(id) {
  let div = document.getElementById(id)
  let num = Math.ceil(Math.random() * 8)
    div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${id}/main${num}.png')`
  }
for (f in fighters) {
  let div = document.createElement("div")
  div.style.backgroundImage = `url('https://www.smashbros.com/assets_v2/img/fighter/${fighters[f]}/main.png')`
  div.style.backgroundSize = "contain"
  div.style.backgroundRepeat = "no-repeat"
  div.setAttribute("onClick", "change(id)")
  div.setAttribute("id", `${fighters[f]}`)
  div.style.border = "2px solid rgb(154,154,154)"
  container.appendChild(div)
}
container.style.display = 'grid'
container.style.gridTemplate = 'repeat(3, 300px) / repeat(3, 15%)'
container.style.gridGap = '1%'
container.style.paddingBottom = "5%"
