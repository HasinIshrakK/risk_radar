import AlertsPanel from "../../components/SharedUi/AlertsPanel";
import Container from "../../components/SharedUi/Container";
import RecentTransactionsTable from "../../components/SharedUi/RecentTransactionsTable";
import SystemHealthSection from "../../components/SharedUi/SystemHealthSection";
import TopTriggeredRules from "../../components/SharedUi/TopTriggeredRules";
import TransactionVolumeBarChart from "../../components/SharedUi/TransactionVolumeBarChart";
import StatCard from "../../components/StatCard/StatCard";


export default function Dashboard() {
  return (
    <div className="my-5 md:my-10">
      <Container>
        <div className="mb-4 md:mb-8">
          <h1 className="md:text-3xl text-2xl font-black text-slate-800 tracking-tight leading-none">
            System Overview
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-2">
            Real-time security analytics and fraud monitoring active.
          </p>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          <StatCard
            title="Total Scanned"
            value="1,284"
            trend="+12.5%"
            isUp={true}
          />
          <StatCard title="High Risk" value="14" trend="+2" isUp={false} />
          <StatCard title="Avg Latency" value="42ms" trend="-3ms" isUp={true} />
          <StatCard title="Saved" value="$42.4k" trend="+$5k" isUp={true} />
        </div>

        {/* Bar Chart Section */}
        <TransactionVolumeBarChart />
        <AlertsPanel></AlertsPanel>
        <RecentTransactionsTable></RecentTransactionsTable>
        <SystemHealthSection></SystemHealthSection>
        <TopTriggeredRules></TopTriggeredRules>
        
      </Container>
    </div>
  );
}
