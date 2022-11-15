import { Link } from "react-router-dom"
import Portfolio from "../../component/Portfolio"
import useFetch from "../../Hook/useFetch"

export default function ManagePortfolio() {
    const portfolio = useFetch(`http://localhost:3001/portfolio`)

    return (
        <div>
            <div className="folioContainer">
                {
                    portfolio && portfolio.map(pf => (
                        <Link to={`portfolio/${pf.pfId}`} style={{ color: "black", textDecoration: "none" }}>
                            <Portfolio title={pf.title} summary={pf.summary} tags={pf.tags} userId={pf.userId} like={pf.like} view={pf.view} img=""></Portfolio>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};