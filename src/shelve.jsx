import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Shelve extends Component {
  
    render() { 
        const currentReading = this.props.books.filter(b => b.shelf === "currentlyReading");
        const wantToReading = this.props.books.filter(b => b.shelf === "wantToRead");
        const read = this.props.books.filter(b => b.shelf === "read")
        console.log(this.props)

        
       
        return ( 

            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>

                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentReading.map(cr => <li key={cr.id}>
                             <div className="book">
                                 <div className="book-top">
                                     <div className="book-cover" style={{width:128, height: 193, backgroundImage: `url(${cr.imageLinks.smallThumbnail})`}}></div>
                                     <div className="book-shelf-changer">
                                        <select value={cr.shelf} onChange={(e) => {this.props.onChange(e,cr)}}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                     </div>
                                 </div>

                                 <div className="book-title">{cr.title}</div>
                                 <div className="book-authors">{cr.authors}</div>
                            </div>  
                            </li>)}
                    </ol>
                  </div>
                </div>

                    {/* second category */}
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToReading.map(wr => <li key={wr.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${wr.imageLinks.smallThumbnail})`}}></div>
                                    <div className="book-shelf-changer">
                                       <select value={wr.shelf}onChange={(e) => {this.props.onChange(e,wr)}} >
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                       </select>
                                    </div>
                                </div>
                                 <div className="book-title">{wr.title}</div>
                                 <div className="book-authors">{wr.authors}</div>  
                            </div>
                        </li> )}
                    </ol>
                  </div>
                </div>

                {/* end second category */}
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {read.map( r => <li key={r.id}>
                           <div className="book">
                               <div className="book-top">
                                   <div className="book-cover" style={{width: 182, height: 192,backgroundImage:`url(${r.imageLinks.smallThumbnail})`}}></div>
                                   <div className="book-shelf-changer">
                                      <select value={r.shelf}onChange={(e) => {this.props.onChange(e,r)}} >
                                           <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                    </select>
                                   </div>
                               </div>
                                <div className="book-title">{r.title}</div>
                               <div className="book-authors">{r.authors}</div>
                           </div>
                       </li>)} 
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
               <Link className="button" to="/search"> Add a book</Link>
            </div>
          </div>          
        );
    }
}
 
export default Shelve;
