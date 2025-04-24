import { Rotas } from "./routes";
import { Header } from "./componentes/header";
import { Footer } from "./componentes/footer";

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow">
				<Rotas />
			</main>

			<Footer />
		</div>
	);
}

export default App;
