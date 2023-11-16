import AddButton from "./wordListButtons/AddButton";
import DeleteButton from "./wordListButtons/DeleteButton";
import EditButton from "./wordListButtons/EditButton";


function WordListItem() {
    return (
      <div className="word-list-item">
        <p>Здесь будет слово, при нажатии будет переходить на карточку слова</p>
        <EditButton></EditButton>
        <AddButton></AddButton>
        <DeleteButton></DeleteButton>
      </div>
    );
  }
  
  export default WordListItem;