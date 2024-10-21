import * as React from "react";
import { DataTable } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Plan() {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: "Bench Press",
      sets: 3,
      reps: 10,
    },
    {
      key: 2,
      name: "Squats",
      sets: 4,
      reps: 12,
    },
    {
      key: 3,
      name: "Deadlifts",
      sets: 3,
      reps: 8,
    },
    {
      key: 4,
      name: "Pull-Ups",
      sets: 3,
      reps: 6,
    },
    {
      key: 5,
      name: "Shoulder Press",
      sets: 3,
      reps: 10,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title>Exercise</DataTable.Title>
          <DataTable.Title numeric>Sets</DataTable.Title>
          <DataTable.Title numeric>Reps</DataTable.Title>
        </DataTable.Header>

        <View style={{ flex: 1 }}>
          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell numeric>{item.sets}</DataTable.Cell>
              <DataTable.Cell numeric>{item.reps}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </View>

        <DataTable.Pagination
          style={styles.dataTablePagination}
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  dataTable: {
    backgroundColor: Colors.dark.background,
    color: Colors.light.text,
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    height: 500,
  },
  dataTablePagination: {
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
