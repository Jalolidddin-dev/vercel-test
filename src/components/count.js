function Count({ numbers }) {
	console.log(numbers)

	return (
		<div>
			<div>
				My name is
				{numbers.map(nums => (
					<div key={nums.name} >
						<h1>Name: {nums.name} </h1>
						<h1>Age: {nums.age} </h1>
						<h1>City: {nums.city}</h1>
					</div>
				))}
			</div>
		</div>
	)
}

export default Count
