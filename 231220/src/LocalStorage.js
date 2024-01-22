// LocalStorageService.js

// feed 저장소

const LOCAL_STORAGE_KEY = "savedRatings";

export const saveRatingsToLocalStorage = (ratings) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ratings));
};

export const getRatingsFromLocalStorage = () => {
  const storedRatings = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedRatings ? JSON.parse(storedRatings) : [];
};

const TODOS_STORAGE_KEY = "savedTodos";

export const saveTodosToLocalStorage = (todos) => {
  // rating 값을 제외한 새로운 배열 생성
  const todosWithoutRating = todos.map(({ rating, ...rest }) => rest);
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todosWithoutRating));
};

export const getTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};
// feed 저장소

const LocalStorageService = {
  // 예제: 저장된 책을 저장하기
  saveBook: (book) => {
    try {
      const savedBooks = LocalStorageService.getItem("savedBooks") || [];

      // 중복 확인
      const isAlreadySaved = savedBooks.some(
        (savedBook) =>
          savedBook.title === book.title && savedBook.author === book.author
      );

      if (!isAlreadySaved) {
        // 중복이 아닌 경우에만 추가
        savedBooks.push(book);
        LocalStorageService.setItem("savedBooks", savedBooks);
      } else {
        console.log("이 책은 이미 저장되어 있습니다.");
        // 중복된 경우에 대한 처리를 여기에 추가할 수 있습니다.
      }
    } catch (error) {
      console.error(
        "로컬 스토리지에 책을 저장하는 동안 오류가 발생했습니다",
        error
      );
    }
  },

  getItem: (key) => {
    try {
      const serializedItem = localStorage.getItem(key);
      return JSON.parse(serializedItem);
    } catch (error) {
      console.error(
        "로컬 스토리지에서 항목을 가져오는 동안 오류가 발생했습니다",
        error
      );
      return null;
    }
  },

  setItem: (key, value) => {
    try {
      const serializedItem = JSON.stringify(value);
      localStorage.setItem(key, serializedItem);
    } catch (error) {
      console.error(
        "로컬 스토리지에 항목을 설정하는 동안 오류가 발생했습니다",
        error
      );
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(
        "로컬 스토리지에서 항목을 제거하는 동안 오류가 발생했습니다",
        error
      );
    }
  },

  isBookAlreadySaved: (book) => {
    try {
      const savedBooks = LocalStorageService.getItem("savedBooks") || [];
      const isAlreadySaved = savedBooks.some(
        (savedBook) =>
          savedBook.title === book.title && savedBook.author === book.author
      );
      return isAlreadySaved;
    } catch (error) {
      console.error(
        "로컬 스토리지에서 중복 확인 중 오류가 발생했습니다",
        error
      );
      return false;
    }
  },
  //찜 책 저장소
  saveLikedBook: (book) => {
    try {
      const likedBooks = LocalStorageService.getItem("likedBooks") || [];

      // 중복 확인
      const isAlreadyLiked = likedBooks.some(
        (likedBook) => likedBook.id === book.id
      );

      if (!isAlreadyLiked) {
        // 중복이 아닌 경우에만 추가
        likedBooks.push(book);
        LocalStorageService.setItem("likedBooks", likedBooks);
      } else {
        console.log("이 책은 이미 찜한 상태입니다.");
        // 중복된 경우에 대한 처리를 여기에 추가할 수 있습니다.
      }
    } catch (error) {
      console.error(
        "로컬 스토리지에 찜한 책을 저장하는 동안 오류가 발생했습니다",
        error
      );
    }
  },
};

export default LocalStorageService;
