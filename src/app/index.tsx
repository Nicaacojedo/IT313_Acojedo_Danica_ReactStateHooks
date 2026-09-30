import { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

// CUSTOM HOOK
function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

// PRACTICE TRACKER
type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

function PracticeTracker({ solved, onSolve, onReset }: PracticeTrackerProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Practice Tracker</Text>

      <Text style={styles.solvedText}>Solved: {solved}</Text>

      <View style={styles.buttonSpacing}>
        <Button title="Solve +1" onPress={onSolve} />
      </View>

      <Button title="Reset" onPress={onReset} />

      {solved >= 5 && <Text style={styles.greatJob}>Great job!</Text>}
    </View>
  );
}

// STOPWATCH
type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(remainingSeconds).padStart(2, "0")}`;

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Lab Stopwatch</Text>

      <Text style={styles.timer}>{formattedTime}</Text>

      {isRunning ? (
        <Text style={styles.running}>Running...</Text>
      ) : (
        <Text style={styles.paused}>Paused</Text>
      )}
    </View>
  );
}

// LAB SCREEN
export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

        <Text style={styles.subtitle}>IT313 - Mobile Programming</Text>

        <PracticeTracker
          solved={solved}
          onSolve={handleSolve}
          onReset={handleReset}
        />

        <Stopwatch seconds={seconds} isRunning={isRunning} />

        <View style={styles.controls}>
          <View style={styles.controlButton}>
            <Button title="Start" onPress={handleStart} disabled={isRunning} />
          </View>

          <View style={styles.controlButton}>
            <Button title="Stop" onPress={handleStop} disabled={!isRunning} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// STYLES
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  solvedText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 15,
  },

  buttonSpacing: {
    marginBottom: 10,
  },

  greatJob: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  timer: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  running: {
    fontSize: 18,
    textAlign: "center",
  },

  paused: {
    fontSize: 18,
    textAlign: "center",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "center",
  },

  controlButton: {
    marginHorizontal: 5,
  },
});
