import React, { useEffect } from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
  const [services, setServices] = useServices([]);
  useEffect(() => {
    fetch('https://peaceful-tor-51218.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, You want to delete?');
    if (proceed) {
      const url = `https://peaceful-tor-51218.herokuapp.com/services/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Service deleted Successfully!!');
          }
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className='w-50 mx-auto'>
      <h2>Manage your services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{' '}
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
