<?php

namespace Vaga\Http\Controllers;

use Illuminate\Http\Request;
use Vaga\PlanoDeSaude;
use Vaga\Clinica;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {  
        $planos = PlanoDeSaude::all();
        $userId = Auth::user()->id;
        $clinicas = Clinica::where('user_id', $userId)->get();
        return view('home')
                ->with('planos', $planos)
                ->with('clinicas', $clinicas);
    }

    public function planos()
    {
        $planos = PlanoDeSaude::all();
        return view('planos')->with('planos', $planos);
    }

    public function clinicas()
    {
        $userId = Auth::user()->id;
        $clinicas = Clinica::where('user_id', $userId)->get();
        return view('clinicas')->with('clinicas', $clinicas);
    }
}
