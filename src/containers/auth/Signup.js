import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'

import {connect} from 'react-redux'
import { signup } from '../../redux/actions/auth'

const Signup = ({
  signup
}) => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [accountCreated, setAccountCreated] = useState(true);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: ''
  })

  const { 
    first_name,
    last_name,
    email,
    password,
    re_password
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    signup(first_name, last_name, email, password, re_password);
    setAccountCreated(true);
    window.scrollTo(0,0);
  }

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://www.eluniverso.com/resizer/HnNgR5g4KINTaXU-RmKez6LWsbI=/536x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/CMX5WI3EBZGD7DVLS2MOD3VJRI.webp"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registrate</h2>
          
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  Primer Nombre
                </label>
                <div className="mt-1">
                  <input
                    name="first_name"
                    value={first_name}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Apellidos
                </label>
                <div className="mt-1">
                  <input
                    name="last_name"
                    value={last_name}
                    onChange={e=>onChange(e)}
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electr??nico
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contrase??a
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Confirmar Contrase??a
                </label>
                <div className="mt-1">
                  <input
                    name="re_password"
                    value={re_password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-aesi hover:bg-hovercolor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrar
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </Layout>
  )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
  signup
}) (Signup)