import { Helmet } from 'react-helmet-async';
import CustomizeAskBackContainer from '../containers/CustomizeAskBackContainer';
import Layout from './Layout';

const CustomizePage = () => {
  return (
    <>
      <Helmet>
        <title>쇼미더럭키밈 - 커스터마이징</title>
      </Helmet>
      <Layout>
        <CustomizeAskBackContainer />
      </Layout>
    </>
  );
};

export default CustomizePage;
