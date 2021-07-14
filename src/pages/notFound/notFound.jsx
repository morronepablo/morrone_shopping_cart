import './notFound.css'

export const NotFound = () => {
    return (
        <div className="notfound">
            <div className="notfound__container">
                <p className="text-center"><i class="fas fa-rocket fa-10x"></i></p>
                <h1 className="text-center">ERROR 404</h1>
                <p className="lead text-center">Página no encontrada</p>
            </div>
        </div>
    )
}