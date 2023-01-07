import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Sales from './Sales/Sales';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<div>dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<div>analytics</div>} />
            <Route path="invoices" element={<div>invoices</div>} />
            <Route path="deposits" element={<div>deposits</div>} />
          </Route>
          <Route path="reports" element={<div>reports</div>} />
          <Route path="feedback" element={<div>feedback</div>} />
          <Route path="customers" element={<div>customers</div>} />
        </Route>
      </Routes>
    </>
  );
};
