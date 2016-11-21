import React from 'react'
import {render} from 'react-dom'

// importing bootstrap...I should not import the whole lib heh
import 'bootstrap/scss/bootstrap.scss'

import Index from 'ui/Index/Index'

const mountNode = document.getElementById('app')

render((
  <Index />
), mountNode)
