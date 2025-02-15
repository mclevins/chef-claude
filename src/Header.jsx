import chefLogo from "./assets/chefClaudeIcon.png"

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={chefLogo}/>
            <h1>Chef Claude</h1>
        </header>
    )
};