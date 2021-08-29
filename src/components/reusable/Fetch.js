/** @format */

import React from "react";
import useFetch from "../../hooks/useFetch";

export default function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>Loading...</p>,
  renderError = error => <pre>{JSON.stringfy(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (data) return renderSuccess({ data });
  if (error) return renderError({ error });
}
