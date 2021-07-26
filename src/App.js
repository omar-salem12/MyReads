import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Shelve from './shelve'
import { getAll, search, update } from './BooksAPI'
import Search from './search'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
   
    showSearchPage: false,
    books: [],
    search:[]

  }

  async componentDidMount() {
           
    const books = await getAll().then(books =>books );
    this.setState({books});
}

//Change Category in shelve.
handleChange = (e, cr) =>{

          let books = [...this.state.books];
          let prestate = [...this.state.books];
         const bookIndex = books.findIndex(book => book.id === cr.id)
         books[bookIndex].shelf = e.target.value;
         this.setState({books});
          
         try {
              update(cr,e.target.value)
         } catch(e) {
           this.setState({prestate})
         }

}

  handelSearch = (query) =>{
       
      search(query).then(search => {
          this.setState({search})
          console.log(this.state.search)
      })

 
}


handelAddToShelve = (e,book ) =>  {
   
       book.shelf = e.target.value
      //clone state
      const books = [...this.state.books]
      books.push(book);
      this.setState({books})
      update(book,book.shelf)

}
     

  render() {
    return (

      <div className="app">
        {/* {this.state.showSearchPage ?  <Search onSearch={this.handelSearch} searchResult={this.state.search}
                                               onChange={this.handleChange}  onAdd={this.handelAddToShelve} /> : 
          <React.Fragment>
             <Shelve books={this.state.books} onChange={this.handleChange}/>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
            </React.Fragment>
        } */}

        
        <Route path="/search" render={props =><Search onSearch={this.handelSearch} searchResult={this.state.search}
                                               onChange={this.handleChange}  onAdd={this.handelAddToShelve} {...props} /> }/>
        <Route exact path="/" render={props => <Shelve books={this.state.books} onChange={this.handleChange} {...props}/> }/>

           
    
      </div>

      
    )
  }
}

export default BooksApp
