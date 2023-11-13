export async function GET() {
  try {
    const data = await fetch("http://homologacao3.azapfy.com.br/api/ps/metahumans");
    const jsonData = await data.json();
    return Response.json(jsonData);
  } catch (err) {
    return new Response("failed to fetch data", {status: 500})
  }
}
