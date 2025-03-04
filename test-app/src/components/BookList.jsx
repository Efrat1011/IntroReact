import React from "react";
import '../index.css'
import BookCard from './BookCard'

export default function BookList(){
    const book = [
        {
             name:"📖 Абай жолы",
              image:"https://kitapal.kz/media/2025/01/20/121214641500.jpg",
              avtor:"✍ Автор: Мұхтар Әуезов",
              year:"📅 Шыққан жылы: 1942 жыл"
        },
        {
            name:"📖 Қан мен тер",
              image:"https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/6/e/nrpeys_n_an_men_ter.jpg",
              avtor:"✍ Автор: Әбдіжәміл Нұрпейісов",
              year:" 📅 Шыққан жылы: 1970 жыл"
        },
        {
            name:"📖 Ұшқан ұя",
            image:"https://s.f.kz/prod/2539/2538874_1000.jpg",
            avtor:"✍ Автор: Бауыржан Момышұлы",
            year:"📅 Шыққан жылы: 1975 жыл"
        },
      ];
      

    return(
        <div className="container">
              <h1 className="title">My profile cards</h1>
              <div  className="book-list">
              {book.map((book,index) =>{
              return <BookCard key={index} name={book.name} image={book.image} avtor={book.avtor} year={book.year}/>
})}
              </div>

        </div>
    )
}