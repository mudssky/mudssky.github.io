import Layout from '../../components/layout'
import ElectricCostCalc from '../../modules/electricCostCalc'
export default function electricCostCalcPage() {
  return (
    <Layout>
      <div className="w-1/2 mx-auto">
        <ElectricCostCalc></ElectricCostCalc>
      </div>
    </Layout>
  )
}
