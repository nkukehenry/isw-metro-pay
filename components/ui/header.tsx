import Image from "next/image"

export default function Header() {
  return (
    <header className="px-6 py-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <Image
            src="https://logosandtypes.com/wp-content/uploads/2024/09/interswitch.svg"
            alt="Interswitch Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h1 className="text-xl font-bold">Interswitch MetroPay</h1>
        </div>
      </div>
    </header>
  )
}
