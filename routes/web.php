<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\User;

// Home
Route::inertia('/', 'Home')->name('home');

// Users list (data ke sath)
Route::get('/users', function () {
    return inertia('User', [
        'users' => User::all(),
    ]);
})->name('users');

// Create page
Route::inertia('/users/create', 'AddUser')->name('users.add');

// Store user
Route::post('/users', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:6',
    ]);

    User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => bcrypt($validated['password']),
    ]);

    return redirect('/users');
})->name('users.store');

// delete api
Route::delete('/users/{id}', function ($id) {
    \App\Models\User::findOrFail($id)->delete();
    return redirect()->back();
});

// Edit api
Route::get('/users/{id}/edit', function ($id) {
    return inertia('EditUser', [
        'user' => \App\Models\User::findOrFail($id)
    ]);
});

// Update api
Route::put('/users/{id}', function (Request $request, $id) {
    $user = \App\Models\User::findOrFail($id);

    $user->update([
        'name' => $request->name,
        'email' => $request->email,
    ]);

    return redirect('/users');
});