/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import ExercisePlayer from './pages/ExercisePlayer';
import Vocabulary from './pages/Vocabulary';
import Library from './pages/Library';
import Statistics from './pages/Statistics';
import Courses from './pages/Courses';
import LessonReader from './pages/LessonReader';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="pratique" element={<Practice />} />
          <Route path="exercice/:type/:id?" element={<ExercisePlayer />} />
          <Route path="vocabulaire" element={<Vocabulary />} />
          <Route path="cours" element={<Courses />} />
          <Route path="cours/:id" element={<LessonReader />} />
          <Route path="bibliotheque" element={<Library />} />
          <Route path="statistiques" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
