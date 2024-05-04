import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container height800">
        <p className="not-found-404">
          404
        </p>
        <h2 className="not-found-title">
          Ничего не найдено! Перейти на <Link to="/">главную</Link>
        </h2>
    </div>
  );
}

export default NotFoundPage;