interface User {
	id: number;
	name: string;
}

const users = [
	{
		id: 1,
		name: "Fabio",
	},
	{
		id: 2,
		name: "Yulieth",
	},
];

export function findName(id: number, callback: (name?: User, error?: string) => void): void {
	const user = users.find(function (user) {
		return user.id == id;
	});

	if (!user) {
		return callback( undefined, `❌ ERROR!!! No se encontro el usuario!` );
	}

	return callback( user, undefined );
    
}
