import './App.css'
import Count from './components/count'
import Navbar from './components/Navbar'
import DashboardImage from './images/Group.png'

function App() {
	let nums = [
		{
			name: 'Jaloliddin',
			age: 24,
			city: 'Navoiy',
		},
		{
			name: 'Abbos',
			age: 25,
			city: 'Samarqand',
		},
		{
			name: 'Shahriyor',
			age: 24,
			city: 'Xorazm',
		},
		{
			name: 'Sulaymon',
			age: 24,
			city: 'Xorazm',
		},
		{
			name: 'Behruz',
			age: 24,
			city: 'Buxoro',
		},
	]

	return (
		<div className='App'>
			<Navbar />

			<h1>React APP</h1>

			<img src={DashboardImage} alt='images' />

			<Count numbers={nums} />
		</div>
	)
}

export default App
