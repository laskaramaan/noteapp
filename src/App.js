import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';
import Pagination from './components/Pagination'

function App() {
  const [addItem, setAddItem] = useState([]);

  const [showPerPage, setShowPerPage] = useState(5)

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end })
  }

  const addNote = (note) => {

    setAddItem((prevData) => {
      return [...prevData, note]

    })




  }

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };


  return (
    <>
      <div>
        <Header />

      </div>



      <div>
        <CreateNote passNote={addNote} />

        {addItem.slice(pagination.start, pagination.end).map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />

          );
        })}

      </div>

      <div>
        {/* ek props ja rha hai "onPaginantionChange" jiska value is also onPaginationChange */}

        <Pagination showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={addItem.length}

        />
      </div>






      <div>
        <Footer />
      </div>







    </>
  );
}

export default App;
