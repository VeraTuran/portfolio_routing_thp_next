import { Link } from "react-router-dom";

const Works = () => {
    return (
        <div className="PageContent">
            <h1> Works </h1>
            <p>Please, select a category:</p>
            <div>
                <Link to="/works/casestudy">Case Studies</Link>
                <Link to="/works/concretecase">Concrete Cases</Link>
                <Link to="/works/exercise">Exercises</Link>
            </div>
        </div>
    )
};

export default Works