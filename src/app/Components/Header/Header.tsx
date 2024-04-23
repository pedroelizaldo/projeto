import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo da Empresa" className="h-8 mr-4" width={40} height={40}/>
        <h1 className="text-xl font-bold">Nome da Empresa</h1>
      </div>
      <nav>
        <ul className="flex">
          <li className="mr-4">
            <Link href="/QuemSomos">Quem Somos</Link>
          </li>
          <li className="mr-4">
            <Link href="/Produtos">Produtos</Link>
          </li>
          <li className="mr-4">
            <Link href="/Contato">Contato</Link>
          </li>
          <li>
            <Link href="/TrabalheConosco">Trabalhe Conosco</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
