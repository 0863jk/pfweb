import { Link } from "react-router-dom"
import Portfolio from "../../Component/Portfolio/PortfolioEdit"
import useFetch from "../../Hook/useFetch"

export default function ManagePortfolio() {
    const portfolio = useFetch(`http://localhost:3001/portfolio`)

    return (
        <div>
            <div className="folioContainer">
                {
                    portfolio && portfolio.map(pf => (
                            <Portfolio title={pf.title} summary={pf.summary} tags={pf.tags} userId={pf.userId} like={pf.like} view={pf.view} img="" pfId={pf.pfId}></Portfolio>
                    ))
                }
            </div>
        </div>
    )
};