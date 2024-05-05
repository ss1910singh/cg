
function real() {
    return (
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="px-4 py-2 border-b border-white-200">
              <h2 className="text-xl font-bold text-White-800">
                Percent coral reefs left
              </h2>
              <h6 className="font-bold text-White">Globally, right now</h6>
              </div>
                  <div className="px-4 py-2">
                      <iframe
                          src='https://www.theworldcounts.com/embeds/counters/1?color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=25'
                          style={{ border: 'none', height: '50px', width: '200px' }}
                          scrolling="no">
                      </iframe>
                  </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default real
  