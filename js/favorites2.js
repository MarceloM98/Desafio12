import { GithubUser } from "./GithubUser.js"
export class Favorites{
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }
  load(){
    this.entries = [
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '12000'
      }
    ]
  }
  save(){}
  add(username){}
  delete(user){
    
  }
}
export class FavoritesView extends Favorites{
  constructor(root){
    super(root)
    this.tbody=root.querySelector('#app')

  }
  onadd(){
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = ()=>{
      const { value } = this.root.querySelector('.search input')
      
      this.add(value)
    }
  }
  update(){
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `imagem de ${user.name}`
      row.querySelector('.user p').innetText = user.name
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.repositories').innetText = user.public_repos
      row.querySelector('.followers').innetText = user.followers
    })

    this.tbody.append(row)
  }
  createRow(){
    const tr = document.createElement('tr')
    tr.innerHTML= `
    <td class="user">
      <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
        <div class="user-info">
          <p>Mayk Brito</p>
          <a href=""><span>/maykbrito</span></a>
        </div>
    </td>
    <td class="repositories">
      76
    </td>
    <td class="followers">
      9589
    </td>
    <td><button class="remove">Remover</button></td>
    `
    return tr
  }
  removeAllTr(){
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}