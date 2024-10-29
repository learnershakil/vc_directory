import SearchForm from "@/components/SearchForm"

const page = async ({ searchParams }:{searchParams: Promise<{ query?: string}>}) => {
  const query = (await searchParams).query

return (
  <>
  <section className="pink_container">
  <h1 className="heading">
    Pitch Your Project, <br /> Connect with Developers
  </h1>
  <p className="sub-heading !max-w-3xl">
    Submit Ideas, Vote on Projects, and Collaborate with Developers to bring your project to life.
  </p>
  <SearchForm query={query}/>
  </section>
  </>
)
}

export default page

